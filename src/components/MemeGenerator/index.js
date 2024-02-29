import {Component} from 'react'
import {
  MemeApp,
  Heading,
  MemeContent,
  MemeForm,
  InputCard,
  LabelText,
  MemeInput,
  Select,
  Option,
  FormButton,
  MemeContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    activeOptionId: fontSizesOptionsList[0].optionId,
    Image: '',
    topText: '',
    bottomText: '',
    backGroundImage: '',
    topTextValue: '',
    bottomTextValue: '',
    fontSize: '',
  }

  onImageText = event => {
    this.setState({Image: event.target.value})
  }

  renderImageInputCard = () => {
    const {Image} = this.state
    return (
      <InputCard>
        <LabelText htmlFor="image">Image URL</LabelText>
        <MemeInput
          type="text"
          id="image"
          placeholder="Enter the Image URL"
          value={Image}
          onChange={this.onImageText}
        />
      </InputCard>
    )
  }

  onTopText = event => {
    this.setState({topText: event.target.value})
  }

  renderTopTextInput = () => {
    const {topText} = this.state
    return (
      <InputCard>
        <LabelText htmlFor="Top-txt">Top Text</LabelText>
        <MemeInput
          type="text"
          id="Top-txt"
          placeholder="Enter the Top Text"
          value={topText}
          onChange={this.onTopText}
        />
      </InputCard>
    )
  }

  onBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  renderBottomTextInput = () => {
    const {bottomText} = this.state
    return (
      <InputCard>
        <LabelText htmlFor="bottom-txt">Bottom Text</LabelText>
        <MemeInput
          type="text"
          id="bottom-txt"
          placeholder="Enter the  Bottom Text"
          value={bottomText}
          onChange={this.onBottomText}
        />
      </InputCard>
    )
  }

  onChangeOptionId = event => {
    this.setState({activeOptionId: event.target.value})
  }

  renderFontSizeOption = () => {
    const {activeOptionId} = this.state
    return (
      <InputCard>
        <LabelText htmlFor="Font-Size">Font Size</LabelText>
        <Select
          value={activeOptionId}
          onChange={this.onChangeOptionId}
          id="Font-Size"
        >
          {fontSizesOptionsList.map(eachOption => (
            <Option value={eachOption.optionId} key={eachOption.optionId}>
              {eachOption.displayText}
            </Option>
          ))}
        </Select>
      </InputCard>
    )
  }

  GenerateMeme = event => {
    event.preventDefault()
    const {activeOptionId, Image, topText, bottomText} = this.state

    this.setState({
      backGroundImage: Image,
      topTextValue: topText,
      bottomTextValue: bottomText,
      fontSize: activeOptionId,
    })
  }

  render() {
    const {
      backGroundImage,
      topTextValue,
      bottomTextValue,
      fontSize,
    } = this.state
    return (
      <MemeApp>
        <Heading>Meme Generator</Heading>
        <MemeContent>
          <MemeForm onSubmit={this.GenerateMeme}>
            {this.renderImageInputCard()}
            {this.renderTopTextInput()}
            {this.renderBottomTextInput()}
            {this.renderFontSizeOption()}
            <FormButton type="submit">Generate</FormButton>
          </MemeForm>
          <MemeContainer data-testid="meme" backGroundImage={backGroundImage}>
            <MemeText fontSize={fontSize}>{topTextValue}</MemeText>
            <MemeText fontSize={fontSize}>{bottomTextValue}</MemeText>
          </MemeContainer>
        </MemeContent>
      </MemeApp>
    )
  }
}
export default MemeGenerator
/*  
   
    */
