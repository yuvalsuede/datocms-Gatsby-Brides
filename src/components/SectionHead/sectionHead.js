import * as React from "react"
import {
    SectionName, SectionBack, SectionHeading, SectionLine
} from "./sectionHead.style"

const SectionHead = ({ children, className, ...props }) => {
    // Add all classs to an array
    const addAllClasses = ["section_head"];

    // className prop checking
    if (className) {
        addAllClasses.push(className)
    }

    return (
        <SectionName className={addAllClasses.join(" ")} {...props}>
            <SectionLine />
            <SectionBack />
            <SectionHeading>{children}</SectionHeading>
        </SectionName>
    )
}

export default SectionHead
