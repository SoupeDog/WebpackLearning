export interface TextAreaCursorInfo {
    selectionStart: number;
    selectionEnd: number;
}

export interface TextAreaContentRemoveLineInfo {
    leftPart: string;
    rightPart: string;
}

export interface AppendTextToTextAreaInput {
    appendTarget: string;
    leftPart: string;
    selectedPart: string;
    rightPart: string;
}

export default class InputElementHelper {
    static getTextAreaCursorInfo(element: HTMLTextAreaElement): TextAreaCursorInfo {
        let result = {} as TextAreaCursorInfo;

        result.selectionStart = element.selectionStart;// 获取选区的开始位置
        result.selectionEnd = element.selectionEnd;// 获取选区的结束位置
        return result
    }

    static removeSelectedLine(element: HTMLTextAreaElement, successHook?: (input: TextAreaContentRemoveLineInfo) => void) {
        let textAreaCursorInfo: TextAreaCursorInfo = this.getTextAreaCursorInfo(element);

        let oldContent = element.textContent;

        if (successHook == null || oldContent == null) {
            return;
        }

        let lineBreakIndexArray = new Array<number>();

        let flag = true;
        let startIndex = 0;

        lineBreakIndexArray.push(0);

        while (flag) {
            let item = oldContent!.indexOf("\n", startIndex);
            if (item != -1) {
                if (item != 0 && item != oldContent.length) {
                    lineBreakIndexArray.push(item);
                }
                startIndex = item + 1;
            } else {
                flag = false;
            }
        }

        let leftCutIndex: number = 0;
        let rightCutIndex: number = oldContent.length;

        lineBreakIndexArray.forEach((value, index, array) => {
            if (value <= textAreaCursorInfo.selectionStart) {
                leftCutIndex = value;
            }
        });

        for (let i = lineBreakIndexArray.length - 1; i > 0; i--) {
            let value = lineBreakIndexArray[i];
            if (value > textAreaCursorInfo.selectionEnd) {
                rightCutIndex = value;
            }
        }

        let leftPart: string;
        if (leftCutIndex != 0) {
            leftPart = oldContent.slice(0, leftCutIndex);
        } else {
            leftPart = "";
        }

        let rightPart: string = oldContent.slice(rightCutIndex);

        successHook({
            leftPart: leftPart,
            rightPart: rightPart
        });

        console.log(lineBreakIndexArray);

    }

    static appendTextToTextArea(element: HTMLTextAreaElement, appendTarget: string,
                                successHook?: (input: AppendTextToTextAreaInput) => void): string {
        let leftPart: string = "";
        let selectedPart: string = "";
        let rightPart: string = "";

        let old: string | null = element.textContent;

        if (old == null) {
            // 原始内容为空，直接覆盖
            return appendTarget;
        } else {
            // 原始内容不为空，覆盖掉选中内容
            let cursorInfo: TextAreaCursorInfo = this.getTextAreaCursorInfo(element);
            selectedPart = old.slice(cursorInfo.selectionStart, cursorInfo.selectionEnd);

            leftPart = old.slice(0, cursorInfo.selectionStart);
            rightPart = old.slice(cursorInfo.selectionEnd);
        }

        if (successHook != null) {
            successHook({
                appendTarget: appendTarget,
                leftPart: leftPart,
                selectedPart: selectedPart,
                rightPart: rightPart
            });
        }

        // 默认返回用 appendTarget 强制覆盖掉原选中内容后的文本
        return leftPart + appendTarget + rightPart;
    }
}
