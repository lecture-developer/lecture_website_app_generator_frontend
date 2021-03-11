import React, {useState} from "react";


function CoursesIcon(props){

  const [color, setColor] = useState(props.color);

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.3514 2H12.6621L13.433 4.14286H10.5791L11.3514 2Z" fill={color}/>
        <path d="M4.14292 7.00001H19.8572V15.5714H4.14292V7.00001Z" fill={color}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2857 4.85709H2.71429C2.31978 4.85709 2 5.17687 2 5.57138V17C2 17.3945 2.30946 17.7143 2.70393 17.7143H21.2857C21.6802 17.7143 22 17.3945 22 17V5.57138C22 5.17687 21.6802 4.85709 21.2857 4.85709ZM3.42854 16.2856H20.5714V6.28563H3.42854V16.2856Z" fill={color}/>
        <path d="M4.14292 22H5.5715L6.82806 18.4286H5.4302L4.14292 22Z" fill={color}/>
        <path d="M17.172 18.4286L18.4285 22H19.8571L18.5723 18.4286H17.172Z" fill={color}/>
        <path d="M12.7142 18.4286H11.2856V20.5714H12.7142V18.4286Z" fill={color}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2857 4.85709H2.71429C2.31978 4.85709 2 5.17687 2 5.57138V17C2 17.3945 2.30946 17.7143 2.70393 17.7143H21.2857C21.6802 17.7143 22 17.3945 22 17V5.57138C22 5.17687 21.6802 4.85709 21.2857 4.85709ZM4.14292 7.00001H19.8572V15.5714H4.14292V7.00001ZM3.42854 16.2856H20.5714V6.28563H3.42854V16.2856Z" fill={color}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.14292 22H5.5715L6.82806 18.4286H5.4302L4.14292 22Z" fill={color}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6621 2H11.3514L10.5791 4.14286H13.433L12.6621 2Z" fill={color}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.172 18.4286L18.4285 22H19.8571L18.5723 18.4286H17.172Z" fill={color}/>
        <path d="M11.2856 18.4286H12.7142V20.5714H11.2856V18.4286Z" fill={color}/>
    </svg>

  );

}

export default CoursesIcon;
