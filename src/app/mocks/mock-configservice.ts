import { configMock } from "./mock-config";
import { of } from 'rxjs';

export const configServiceMock = {
    get() {
        return of(configMock)
    }
}