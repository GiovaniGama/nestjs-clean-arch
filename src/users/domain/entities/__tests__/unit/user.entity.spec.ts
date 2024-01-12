import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder"
import { UserEntity } from "../../user.entity"
import { UserPropsInterface } from "../../user.entity.interface"

describe("UserEntity unit tests", () => {

  let props: UserPropsInterface
  let sut: UserEntity

  beforeEach(() => {
    props = UserDataBuilder({});

    sut = new UserEntity(props);
  })

  it("Constructor method", () => {
    expect(sut.name).toEqual(props.name)
    expect(sut.email).toEqual(props.email)
    expect(sut.password).toEqual(props.password)
    expect(sut.createdAt).toBeInstanceOf(Date)
  })

  it("Getter of name field", () => {
    expect(sut.name).toBeDefined()
    expect(sut.name).toEqual(props.name)
    expect(typeof sut.name).toBe('string')
  })

  it("Setter of name field", () => {
    sut['name'] = 'other name'
    expect(sut.name).toEqual('other name')
    expect(typeof sut.name).toBe('string')
  })

  it("Getter of email field", () => {
    expect(sut.email).toBeDefined()
    expect(sut.email).toEqual(props.email)
    expect(typeof sut.email).toBe('string')
  })

  it("Getter of password field", () => {
    expect(sut.password).toBeDefined()
    expect(sut.password).toEqual(props.password)
    expect(typeof sut.password).toBe('string')
  })

  it("Setter of password field", () => {
    sut['password'] = 'other password'
    expect(sut.password).toEqual('other password')
    expect(typeof sut.password).toBe('string')
  })

  it("Getter of createdAt field", () => {
    expect(sut.createdAt).toBeDefined()
    expect(sut.createdAt).toBeInstanceOf(Date)
  })

  it("Should update a user", () => {
    sut.updata('other name')
    expect(sut.name).toEqual('other name')
  })

  it("Should update the password field", () => {
    sut.updataPassword('otherPassword')
    expect(sut.password).toEqual('otherPassword')
  })
})
