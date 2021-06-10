export interface FormConfig {
  controlName: string;
  labelMarkdownElement?: any;
  controlType: string;
  valueType?: string;
  currentValue?: string;
  placeholder?: string;
  options?: Array<{
    optionName: string;
    markdownElement?: any;
    val: string;
  }>;
  validators?: {
    required?: boolean;
    minlength?: number;
    maxlength?: number;
  };
}
