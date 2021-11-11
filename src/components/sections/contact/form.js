import React from "react";
import {
    ButtonForm,
    FormContent,
    Input,
    TextArea,
} from "../../../styles/contact.style";
import { Paragraph } from "../../../styles/typography";

export const Form = () => {
    return (
        <FormContent>
            {/* <Paragraph textAlign="left" margin="0.5rem 2rem" medium>
                Name
            </Paragraph> */}
            <Input
                autoComplete="off"
                placeholder="Your name"
                type="text"
                name="name"
            />
            {/* <Paragraph textAlign="left" margin="0.5rem 2rem" medium>
                Email
            </Paragraph> */}
            <Input
                autoComplete="off"
                placeholder="Your email"
                type="email"
                name="email"
            />
            {/* <Paragraph textAlign="left" margin="0.5rem 2rem" medium>
                Message
            </Paragraph> */}
            <TextArea
                autoComplete="off"
                placeholder="Write your message "
                name="message"
            ></TextArea>
            <ButtonForm type="submit">Send Message</ButtonForm>
        </FormContent>
    );
};
