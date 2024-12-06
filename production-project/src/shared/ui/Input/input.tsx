import React, {InputHTMLAttributes, memo, useEffect} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export interface InputProps extends HtmlInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = React.useState(false);
    const [caretPosition, setCaretPosition] = React.useState(0);
    const ref = React.useRef<HTMLInputElement>(null);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setCaretPosition(event.target.value.length)
    }

    const onBlurHandler = () => {
        setIsFocused(false);
    }

    const onFocusHandler = () => {
        setIsFocused(true);
    }

    const onSelectHandler = (e: any) => {
        setCaretPosition(e?.target.selectionStart || 0);
    }

    useEffect(() => {
        if(autofocus) {
            setIsFocused(true)
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder &&
                (<div className={cls.placeholder}>
                    {placeholder + '>'}
                </div>)}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    onSelect={onSelectHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    {...otherProps}
                />
                {isFocused && <span className={cls.caret} style={{left: (caretPosition * 9) + "px"}} />}
            </div>
        </div>
    );
})
