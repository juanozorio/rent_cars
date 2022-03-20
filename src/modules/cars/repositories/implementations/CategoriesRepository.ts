import { Category } from '../../model/Category';
import { ICreateCategoryDTO, ICategoriesRepository } from '../ICategoriesRepository';


class CategoriesRepository implements ICategoriesRepository {

    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() { 
        this.categories = [] //Array vazio para armazenar as categorias
    }

    public static getInstance(): CategoriesRepository {
        if(!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
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