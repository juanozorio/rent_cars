import { CategoriesRepository } from "../respositories/CategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {
        
    }
    execute({description, name}: IRequest) {
        const categoriesRepository = new CategoriesRepository();

        const categoryAlreadyExists = categoriesRepository.findByName(name)

        if(categoryAlreadyExists) {
            throw new Error('Category already exists')
        }

        categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryService }