//Dimensions for device media queries and layout padding
const dimensions = {
    //pixels
    minwidthDesktop: 900,
    maxwidthDesktop: 1200,
    maxwidthTablet: 899,
    //ems
    paddingHorizontalDesktop: 4,
    paddingHorizontalTablet: 2.5,
    paddingHorizontalMobile: 2,

}

const breakpoints = [900]

export const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
)

export default dimensions;
