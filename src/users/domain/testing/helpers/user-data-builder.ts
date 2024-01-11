import { UserPropsFakerInterface, UserPropsInterface } from "../../entities/user.entity.interface"
import { faker } from "@faker-js/faker"


export function UserDataBuilder(props: UserPropsFakerInterface): UserPropsInterface{
    return {
        name: props.name ?? faker.person.fullName(),
        email: props.email ?? faker.internet.email(),
        password: props.password ?? faker.internet.password(),
        createdAt: props.createdAt ?? new Date()
    }
}