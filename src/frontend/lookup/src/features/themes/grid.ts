import styled from "styled-components";

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 200px auto 240px;
    grid-template-rows: 46px auto 52px;
    grid-template-areas:
        "SN CI CI"
        "CL CD UL"
        "UI CD UL";

    height: 100%;
`;