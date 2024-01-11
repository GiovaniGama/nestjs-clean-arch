import { Entity } from "@/shared/domain/entities/entity";
import { UserPropsInterface } from "./user.entity.interface";

export class UserEntity extends Entity<UserPropsInterface> {
  constructor(public readonly props: UserPropsInterface, id?: string){
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  get name(){
    return this.props.name
  }

  get email(){
    return this.props.email
  }

  get password(){
    return this.props.password
  }

  get createdAt(){
    return this.props.createdAt
  }
}
