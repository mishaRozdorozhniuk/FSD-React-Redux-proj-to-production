import {Modal} from "shared/ui/Modal/Modal";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginModal.module.scss";
import {Suspense} from "react";
import {LoginFormAsync} from "../LoginForm/Login.async";
import {Loader} from "shared/ui/Loader/Loader";

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = ({className, onClose, isOpen}: LoginModalProps) => {
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            onClose={onClose}
            isOpen={isOpen}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
