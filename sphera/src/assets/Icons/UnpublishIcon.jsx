import React, { useState } from "react";


function UnpublishIcon(props) {
    const [color,setColor] = useState(props.color);

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L8.01765 6.60344L8 6.62109L17.1924 15.8135L17.21 15.7958L20.2071 18.7929C20.5976 19.1834 20.5976 19.8166 20.2071 20.2071C19.8166 20.5976 19.1834 20.5976 18.7929 20.2071L15.5156 16.9298L15.1343 18.6211C15.0581 18.9588 14.7891 19.2186 14.4501 19.2817L11.3378 19.8605C11.0585 19.9125 10.7716 19.823 10.5708 19.6212L9.67171 18.7182C9.33485 18.3798 9.33485 17.8312 9.67171 17.4929L10.2817 16.8802C10.6185 16.5419 11.1647 16.5419 11.5015 16.8802L11.6361 17.0154C11.9156 17.2961 12.3493 17.3501 12.6886 17.1465L14.5905 16.0047L14.0118 15.426L12.8954 16.1395C12.5543 16.3576 12.1083 16.3084 11.8224 16.0212L11.0917 15.2873L8.9564 17.432C8.78797 17.6012 8.51489 17.6012 8.34646 17.432C8.17803 17.2629 8.17803 16.9886 8.34646 16.8194L10.4817 14.6746L9.87179 14.062L7.73651 16.2067C7.56808 16.3759 7.295 16.3759 7.12657 16.2067C6.95814 16.0375 6.95814 15.7633 7.12657 15.5941L9.26185 13.4493L8.53134 12.7156C8.24546 12.4284 8.19649 11.9804 8.41354 11.6378L9.11553 10.5297L8.46807 9.88228L7.34149 11.7756C7.13872 12.1164 7.19249 12.5521 7.47198 12.8328L7.60654 12.9679C7.9434 13.3063 7.9434 13.8549 7.60654 14.1932L6.99659 14.8059C6.65973 15.1443 6.11357 15.1443 5.77671 14.8059L4.87766 13.9029C4.67681 13.7011 4.58771 13.413 4.63943 13.1325L5.21573 10.0063C5.2785 9.66582 5.53711 9.39556 5.87337 9.31907L7.52837 8.94258L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289ZM17.2976 13.0902C18.5347 11.8576 19.3821 10.266 19.7046 8.5165L20.3631 4.94467C20.5 4.50069 20.0349 4.04839 19.5589 4.13691L16.0029 4.79836C14.255 5.12348 12.6654 5.97948 11.4365 7.22917L17.2976 13.0902Z" fill={color} />
        </svg>
    )
}

export default UnpublishIcon;