import { NewEntity } from "../generated/Example/Example";
import { CustomEntity } from '../../generated/schema';

export function handleNewEntity(event: NewEntity): void {
    let customEntity = new CustomEntity(event.params.id.toHex());
    customEntity.name = event.params.displayName;

    customEntity.save();
}