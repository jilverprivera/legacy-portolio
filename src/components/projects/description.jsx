import React from 'react'
import { BannerDescription, BannerTitle, ContentLink } from '../../styles/projects.style'
import { IoMdArrowDropdown } from "react-icons/io";

const Description = () => {
    return (
        <BannerDescription>
        <BannerTitle>My personal projects</BannerTitle>
        <ContentLink>
            <IoMdArrowDropdown />
        </ContentLink>
    </BannerDescription>
    )
}
export default Description;
