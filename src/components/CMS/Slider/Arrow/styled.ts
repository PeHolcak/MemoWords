import styled from "styled-components";
import { SvgIconProps } from "@mui/material/SvgIcon";


export const ArrowWrap = styled.button`

    border: 0.1rem solid ${({theme}) => theme.colors.gray};

    background-color: ${({theme}) => theme.colors.white};
    border-radius: 50%;

    height: 3rem;
    width: 3rem;

    padding: 0;

    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;

    transition-duration: 0.5s;
    &:hover {
    background-color: ${({theme}) => theme.colors.gray};
        transform: scale(1.1);
    }

    &:hover > svg {
        color: ${({theme}) => theme.colors.white};

    }
`;


export const getStyledIcon = (Icon: React.FC<SvgIconProps>) => styled(Icon)`
    height: 1rem;
    width: 1rem;

    color: ${({theme}) => theme.colors.gray};
`;