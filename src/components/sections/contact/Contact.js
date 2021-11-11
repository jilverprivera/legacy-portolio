import React from "react";

import { Container, WrapperGrid } from "../../../styles/global.style";
import { Paragraph, SectionTitle } from "../../../styles/typography";
import { GrLocation } from "react-icons/gr";
import {
    FormWrapper,
    LocationContent,
    LocationIcon,
    MessageContent,
} from "../../../styles/contact.style";
import { Form } from "./form";

const Contact = () => {
    return (
        <Container id="contact">
            <WrapperGrid columnWidth="55.5rem">
                <MessageContent>
                    <SectionTitle>Let&apos;s Talk 🖐</SectionTitle>
                    <Paragraph
                        large
                        lineHeight="2.5rem"
                        responsiveAlign="center"
                    >
                        Feel free to send me a message here, or on my social
                        networks no matter if you want to ask me about
                        something, have a job offer, or just want to say hello,
                        I will try to get back to you as soon as possible.
                    </Paragraph>

                    <LocationContent>
                        <LocationIcon>
                            <GrLocation />
                        </LocationIcon>
                        <Paragraph large>Bucaramanga, CO</Paragraph>
                    </LocationContent>
                </MessageContent>
                <FormWrapper>
                    <Form />
                </FormWrapper>
            </WrapperGrid>
        </Container>
    );
};

export default Contact;
