import { Entity } from "@/shared/domain/entities/entity";
import { UserPropsInterface } from "./user.entity.interface";

export class UserEntity extends Entity<UserPropsInterface> {
  constructor(public readonly props: UserPropsInterface, id?: string){
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  updata(value: string): void{
    this.name = value;
  }

  updataPassword(value: string): void{
    this.password = value;
  }

  get name(){
    return this.props.name
  }

  private set name(value: string){
    this.props.name = value;
  }

  get email(){
    return this.props.email
  }

  get password(){
    return this.props.password
  }

  private set password(value: string){
    this.props.password = value;
  }

  get createdAt(){
    return this.props.createdAt
  }
}
