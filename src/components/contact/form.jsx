import { useContext, useRef } from "react";
import emailjs from "emailjs-com";

import { useTranslation } from "react-i18next";
import { useForm } from "../../hooks/useForm";
import { Button } from "../../styles/button.style";

import {
    FormWrapper,
    FormContent,
    Input,
    TextArea,
} from "../../styles/contact";
import { AppContext } from "../../context/AppContext";

export const Form = () => {
    const form = useRef();
    const { contact } = useContext(AppContext);
    const { sendingForm, setSendingForm, successForm, setSuccessForm } =
        contact;

    const [t] = useTranslation("contact");

    const [{ name, subject, email, message }, handleInputChange] = useForm({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    const handleSendForm = (e) => {
        e.preventDefault();
        setSendingForm(true);
        emailjs
            .sendForm(
                "service_tyb67xn",
                "template_h105zdl",
                form.current,
                "user_fyfCvAi7FHIFr9lFVimLM"
            )
            .then((result) => console.log("success", result.text))
            .catch((err) => console.log(err));
        setSendingForm(false);
    };

    return (
        <FormWrapper ref={form} onClick={handleSendForm}>
            <Input
                autoComplete="off"
                placeholder={t("form.name")}
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
            />

            <Input
                autoComplete="off"
                placeholder={t("form.subject")}
                type="text"
                name="subject"
                value={subject}
                onChange={handleInputChange}
            />
            <Input
                autoComplete="off"
                placeholder={t("form.email")}
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
            />

            <TextArea
                autoComplete="off"
                placeholder={t("form.message")}
                name="message"
                value={message}
                onChange={handleInputChange}
            />
            <Button type="submit" smallPadding disabled={sendingForm}>
                {t("form.button")}
            </Button>
        </FormWrapper>
    );
};
