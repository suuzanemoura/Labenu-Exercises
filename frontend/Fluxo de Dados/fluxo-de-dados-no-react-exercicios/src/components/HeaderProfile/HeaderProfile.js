import {Profile, ProfileName, ProfilePhoto} from './styled'

export const HeaderProfile = (props) => {

    return(
            <Profile>
                <ProfilePhoto src={props.profilePhoto} alt="Foto de perfil do usuário" />
                <ProfileName>{props.name}</ProfileName>
            </Profile>
    )
}