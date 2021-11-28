import React from "react";
import { useTranslation } from "react-i18next";

import {
    FormWrapper,
    FormContent,
    Input,
    TextArea,
} from "../../styles/contact";

export const Form = () => {
    const [t] = useTranslation("contact");
    return (
        <FormContent>
            <FormWrapper>
                <Input
                    autoComplete="off"
                    placeholder={t("form.name")}
                    type="text"
                    name="name"
                />

                <Input
                    autoComplete="off"
                    placeholder={t("form.email")}
                    type="email"
                    name="email"
                />

                <TextArea
                    autoComplete="off"
                    placeholder={t("form.message")}
                    name="message"
                ></TextArea>
                <button>{t("form.button")}</button>
            </FormWrapper>
        </FormContent>
    );
};
