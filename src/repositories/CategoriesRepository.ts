import { Category } from '../model/Category';


// DTO => Data Transfer Object
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRepository {

    private categories: Category[]; 

    constructor() {
        this.categories = [] //Array vazio para armazenar as categorias
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const category = new Category();
    
        //Usamos o Object assign para não precisar declarar um por um
        Object.assign(category, {
            name,
            description,
            create_at: new Date()
        })
        
        //Inserindo as informações do objeto no array categories
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(category => category.name === name);
        return category;
    }
}


export { CategoriesRepository }