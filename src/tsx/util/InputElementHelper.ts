export interface TextAreaCursorInfo {
    selectionStart: number;
    selectionEnd: number;
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

    static appendTextToTextArea(element: HTMLTextAreaElement, appendTarget: string,
                                successHook?: (input: AppendTextToTextAreaInput) => void): string {
        let leftPart: string = "";
        let selectedPart: string = "";
        let rightPart: string = "";

        let oldTextContent: string | null = element.textContent;

        if (oldTextContent == null) {
            // 原始内容为空，直接覆盖
            return appendTarget;
        } else {
            // 原始内容不为空，覆盖掉选中内容
            let cursorInfo: TextAreaCursorInfo = this.getTextAreaCursorInfo(element);
            selectedPart = oldTextContent.slice(cursorInfo.selectionStart, cursorInfo.selectionEnd);

            leftPart = oldTextContent.slice(0, cursorInfo.selectionStart);
            rightPart = oldTextContent.slice(cursorInfo.selectionEnd);
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
