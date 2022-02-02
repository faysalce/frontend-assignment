import styled from "styled-components";

export const StyledMovieModal = styled.div`
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.65);
    animation-name: appear;
    animation-duration: 0.5s;
  }

  .modal-dialog {
    width:100%;
    max-width:583px;
    padding: 20px;
    background: transparent;
    position: relative;
    margin: 0 20px;
    max-height: calc(100vh - 100px);
    text-align: left;
    display: flex;
    flex-direction: column;
    background-color:#fff;
    overflow: hidden;
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: slide-in;
    animation-duration: 0.5s;
  }

  .modal-header,
  .modal-footer {
    display: flex;
    align-items: center;
    
  }

  .modal-header {
    justify-content: space-between;
  }
  .modal-title{
    font-weight: bold;
  }
  .modal-footer {
    border-top: 1px solid rgba(239, 235, 231, 0.9);
    justify-content: flex-end;
  }

  .modal-close {
    cursor: pointer;
    padding: .25rem .5rem ;
    line-height: 1.1;
    border: 1px solid #000;
  }

  .modal-body {
    overflow: auto;
  }

  .modal-content {
    padding-top: 1rem;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-in {
    from {
      transform: translateY(-150px);
    }
    to {
      transform: translateY(0);
    }
  }
`;
