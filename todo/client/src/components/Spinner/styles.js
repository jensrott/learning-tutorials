import styled from "styled-components"

export const Wrapper = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
`

export const Line = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #eb8555;
    border-radius: 50%;
    animation: spinning 1.2s cubic-bezier(0.5, 0, 0.5, 1);

    border-color: #eb8555 transparent transparent transparent;

        &:nth-child(1) {
            animation-delay: -0.45s;
        }

        &:nth-child(2) {
            animation-delay: -0.3s;
            }

        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }

    @keyframes spinning {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes fade {
        0% {
            opacity: 0;
            transform: translateY(40px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
      }

`