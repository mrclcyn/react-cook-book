import { Link } from 'react-router-dom'

const Dishes = ({ recipes }) => {

    console.log("Dishes....")
    console.log(recipes);

    //should get country name thru useParams or props and once data is filter with that country name
    //use that data to render recipes of the particular country
    const countryName = 'Germany'; //now hardcoded the value
    const recipesCountry = recipes.filter(recipe => recipe.fields.country.toLowerCase() === countryName.toLowerCase())
    // console.log(recipesCountry);

    return (
        <>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-4">

                        {recipesCountry.map((items) => {
                            return (
                                <>

                                    <Link to={`/dishe/${items.fields.id}`}>
                                        <h1>
                                            {items.fields.title}
                                        </h1>
                                    </Link>

                                    <div className="list-group" id="list-tab" role="tablist">
                                        <a className="list-group-item list-group-item-action list-group-item-success active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
                                            <img src={items.fields.image.fields.file.url} className="img-fluid" style={{ width: '100%', height: 'auto' }} />
                                            <div className="pl-3 pt-3 pr-3 mb-5">
                                                <h3 className="mb-2">{items.fields.country}</h3>
                                                <h4 className="mb-2">{items.fields.tags}</h4>
                                                <p>{items.fields.title}<br />
                                                    <span style={{ fontSize: '14px' }}>{items.fields.originalTitle}</span>
                                                </p>
                                            </div>
                                        </a>
                                    </div>

                                </>
                            )
                        })}


                        {/*Accordion */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dishes;