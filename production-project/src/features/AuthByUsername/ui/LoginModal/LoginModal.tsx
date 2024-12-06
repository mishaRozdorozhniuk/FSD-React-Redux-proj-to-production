import {Modal} from "shared/ui/Modal/Modal";
import LoginForm from "features/AuthByUsername/ui/LoginForm/LoginForm";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginModal.module.scss";

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
            <LoginForm />
        </Modal>
    );
};
