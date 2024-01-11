import { validate as uuidValidade } from 'uuid'
import { Entity } from '../../entity';
import { StubPropsInterface } from './entity.interface';

class StubEntity extends Entity<StubPropsInterface> {}

describe("Entity unit tests", () => {
    const props = {prop1: 'value1', prop2: 15}
    const id = 'b040b67b-588d-4ce1-8445-5ba8dbc6d244'
    const entity = new StubEntity(props, id)
  it("Should set props and id", () => {
    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidade(entity._id)).toBeTruthy()
  })

  it("Should accepet a valid uuid", () => {
    expect(uuidValidade(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it("Should convert a entity to a json", () => {
    expect(entity.toJSON()).toStrictEqual({
        id, 
        ...props
    })
  })

})
