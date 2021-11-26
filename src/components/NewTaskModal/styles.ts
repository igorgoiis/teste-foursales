import styled from 'styled-components';
import { darken, transparentize } from 'polished';

interface RadioBoxProps {
    isActive: boolean;
}

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font: 100.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;

        font-weight: 400;
        font-size: 1rem;
        color: var(--text-title);

        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;

        background-color: #e7e9ee;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    textarea {
        width: 100%;
        padding: 1rem 1.5rem;
        margin: 1rem 0 0 !important;
        height: 4rem;

        font-weight: 400;
        font-size: 1rem;
        color: var(--text-title);

        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;

        background-color: #e7e9ee;

        &::placeholder {
            color: var(--text-body);
        }
    }

    textarea + span {
        font-size: .8rem;
        color: var(--text-body);
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--blue);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;
        transition: filter .2s;

        &:hover {
            filter: brightness(.9);
        }
    }


`;

export const TaskCategoryContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
`;

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: ${({ isActive }) => isActive ? '1px solid var(--blue)' : '1px solid #d7d7d7'};
    border-radius: .25rem;
    background-color: ${({ isActive }) => isActive ? transparentize(.9, '#2356AD') : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color ease-in-out .2s;

    &:hover {
        border-color: ${({isActive}) => isActive ? 'var(--blue)' : darken(0.1, '#d7d7d7')} 
    }
    
    span {
        display: inline-block;
        font-size: 1rem;
        color:var(--text-title);
    }
`;