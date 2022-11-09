import { BasicService } from "../services/basicService";

export class BasicController {
    private basicService: BasicService;
    constructor(){
    this.basicService = new BasicService()
    }
    deleteById(id: number) {
    this.basicService.deleteById(id)
    }

    updateById(id: number) {
        this.basicService.updateById(id)
    }

    createItem() {
    this.basicService.createItem()
    }

    getById(id: number) {
        this.basicService.getById(id)
    }

    getByName(name: string) {
        this.basicService.getByName(name)
    }
}