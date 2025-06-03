import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >;
      h1: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
      >;
      h2: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
      >;
      p: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
      >;
      form: React.DetailedHTMLProps<
        React.FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
      >;
      label: React.DetailedHTMLProps<
        React.LabelHTMLAttributes<HTMLLabelElement>,
        HTMLLabelElement
      >;
      input: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >;
      select: React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
      >;
      option: React.DetailedHTMLProps<
        React.OptionHTMLAttributes<HTMLOptionElement>,
        HTMLOptionElement
      >;
      textarea: React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      >;
      button: React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >;
    }
  }
}
