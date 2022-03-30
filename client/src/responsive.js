const size = {
    s: '480px',
    m: '768px',
    l: '1024px',
    xl: '1200px'
}
const device = {
    s: `(min-width: ${size.s})`,
    m: `(min-width: ${size.m})`,
    l: `(min-width: ${size.l})`,
    xl: `(min-width: ${size.xl})`
}

export default {size, device}

// import responsive from '../responsive'

// @media only screen and ${responsive.device.s}{

// }
// @media only screen and ${responsive.device.m}{

// }
// @media only screen and ${responsive.device.l}{

// }
// @media only screen and ${responsive.device.xl}{

// }
