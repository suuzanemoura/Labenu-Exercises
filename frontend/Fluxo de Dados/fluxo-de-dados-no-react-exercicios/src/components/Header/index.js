import {Header, Title} from './styled'
import {HeaderProfile} from '../HeaderProfile/HeaderProfile'

export const HeaderPage = (props) => {
    if (props.pageFlow !== 1){
        return(
            <Header>
            <HeaderProfile
            name={props.userInfo.name}
            profilePhoto={props.userInfo.profilePhoto}
            login={props.login}
            />
            <Title>Insta4</Title>
            </Header>
            )
    } else {
        return(
        <Header>
            <Title>Insta4</Title>
        </Header>
        )
    }
}