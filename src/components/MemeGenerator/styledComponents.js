// Style your components here
import styled from 'styled-components'

export const MemeApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MemeAppCard = styled.div`
  max-width: 1110px;
  padding: 15px;
`
export const Heading = styled.h1`
  font-family: 'Open Sans';
  font-size: 35px;
  color: #35469c;
`
export const MemeContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`
export const MemeForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
export const LabelText = styled.label`
  font-family: 'Open Sans';
  font-size: 12px;
  margin-bottom: 5px;
  color: #7e858e;
  font-weight: 450;
`
export const MemeInput = styled.input`
  height: 35px;
  width: 320px;
  padding: 12px;
  background-color: inherit;
  border: 1px solid #d7dfe9;
  border-radius: 6px;
  font-family: 'Open Sans';
  color: #5a7184;
  font-size: 14px;
  outline: none;
`
export const Select = styled.select`
  color: #1e293b;
  height: 35px;
  width: 320px;
  padding-left: 12px;
  background-color: inherit;
  border: 1px solid #d7dfe9;
  border-radius: 6px;
  font-family: 'Open Sans';
  font-size: 14px;
  outline: none;
`
export const Option = styled.option`
  font-family: 'Open Sans';
  font-size: 14px;
  color: #1e293b;
`
export const FormButton = styled.button`
  background-color: #0b69ff;
  font-size: 14px;
  font-family: 'Open Sans';
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  align-self: flex-start;
  width: 170px;
  padding: 10px;
`
export const MemeContainer = styled.div`
  background-image: url(${props => props.backGroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 280px;
  width: 350px;
  margin-left: 25px;
  @media screen and (max-width: 767px) {
    margin-top: 25px;
    margin-left: 0px;
  }
`
export const MemeText = styled.p`
  font-family: 'Open Sans';
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
  font-weight: 600;
`
