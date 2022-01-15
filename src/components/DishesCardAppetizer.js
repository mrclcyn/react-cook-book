export const DishesCardAppetizer = ({recipes, country}) => {

    const countryName = country; 
    const recipesCountry = recipes.filter(recipe => recipe.fields.country.toLowerCase() === countryName.toLowerCase())
    // console.log(recipesCountry);

    if (!recipes) {
        return(
            <div className="loading">
                Loading ...
            </div>
        )
    } else { 
    return(
        <div>
            <div className="list-group" id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action list-group-item-success active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
                     <img src={recipesCountry[0].fields.image.fields.file.url} className="img-fluid" style={{ width: '100%', height: 'auto' }} alt={recipesCountry[0].fields.country} />
                     <div className="pl-3 pt-3 pr-3 mb-5">
                        <h3 className="mb-2">{recipesCountry[0].fields.nationality}</h3>
                        <h4 className="mb-2">{recipesCountry[0].fields.tags}</h4>
                                                
                     </div>
                </a>
            </div>
        </div>
    )
}}