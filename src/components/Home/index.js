import { Component } from 'react'
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import Header from '../Header'
import Footer from '../Footer'
import ProductCard from '../ProductCard'
import Filter from '../Filter'
import FiltersGroup from '../FiltersGroup';
import './index.css'

const selectStatus=[
  {
    selectId: "RECOMMEND",
    value: "RECOMMEND",
  },
  {
    selectId: "NEWEST FIRST",
    value: "NEWEST FIRST",
  },
  {
    selectId: "POPULAR",
    value: "POPULAR",
  },
  {
    selectId: "PRICE: HIGH TO LOW",
    value: "PRICE: HIGH TO LOW",
  },
  {
    selectId: "PRICE: LOW TO HIGH",
    value: "PRICE: LOW TO HIGH",
  },
]

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class Home extends Component{
    state={
        productData: [],
        apiStatus: apiStatusConstants.initial,
        isFilter: false,
        isIdealFilterActive: false,
        selectedId: selectStatus[0].selectId,
    }

    componentDidMount() {
        this.getProductData()
    }

    getProductData = async () => {
        this.setState({
          apiStatus: apiStatusConstants.inProgress,
        })
        const apiUrl = 'https://fakestoreapi.com/products?limit=20'
        try {
          const response = await fetch(apiUrl)
          if (response.ok) {
            const fetchedData = await response.json()
            const updatedData = fetchedData.map(product => ({
              id: product.id,
              title: product.title,
              price: product.price,
              description: product.description,
              category: product.category,
              image: product.image,
            }))
            this.setState({
              productData: updatedData,
              apiStatus: apiStatusConstants.success,
            })
          } else {
            throw new Error('Something went wrong')
          }
        } catch (error) {
          this.setState({
            apiStatus: apiStatusConstants.failure,
          })
        }
    }

    renderProductDetailsView = () => {
        const {productData, isFilter} = this.state
        const containerClass = isFilter ? "narrow-width" : "full-width"
        return (
          <div className={`products-container ${containerClass}`}>
            <div className="product-list-container">
                {productData.map(product => (
                    <ProductCard productData1={product} key={product.id} />
                ))}
            </div>
          </div>
        )
    }

    renderLoadingView = () => {
      const {isFilter} = this.state
      const containerClass = isFilter ? "narrow-width" : "full-width"
      return (
        <div className={`products-loader-container ${containerClass}`}>
          <h1>Loading</h1>
        </div>
      )
    }
    
    renderFailureView = () => {
      const {isFilter} = this.state
      const containerClass = isFilter ? "narrow-width" : "full-width"
      return (
        <div className={`products-error-container ${containerClass}`}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
            alt="error-view"
            className="error-image"
          />
          <h1 className="error-heading">Oops! Something Went Wrong</h1>
          <p className="error-description">
            We are having some trouble processing your request. Please try again after some time.
          </p>
        </div>
      )
    }

    renderProductDetails = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderProductDetailsView()
          case apiStatusConstants.failure:
            return this.renderFailureView()
          case apiStatusConstants.inProgress:
            return this.renderLoadingView()
          default:
            return null
        }
    }

    changeSelectedId = (selectId) => {
      this.setState({selectedId : selectId})
    }

    toggleFilter = () => {
      this.setState(prevState => ({
        isFilter: !prevState.isFilter
      }))
    }

    toggleIdealFilter = () => {
      this.setState(prevState => ({
        isIdealFilterActive: !prevState.isIdealFilterActive
      }))
    }

    render(){
      const {selectedId, isFilter, isIdealFilterActive} = this.state

        return (
            <>
                <Header />
                    <div className="home-container">
                        <div className="header-container">
                          <div className="filter-header large">
                            <h1 className="items-count">3425 ITEMS</h1>
                            <h1 className="filter" onClick={this.toggleFilter}>
                              {isFilter ? <RiArrowDropLeftLine /> : <RiArrowDropRightLine />} 
                              <span className="filter-text">{isFilter ? "HIDE FILTER" : "SHOW FILTER"}</span>
                            </h1>
                          </div>
                          <h1 className="filter-label display-small">FILTER</h1>
                          <Filter selectStatus={selectStatus} selectedId={selectedId} changeId={this.changeSelectedId}/>
                        </div>
                        <hr className="separator" />
                        <div className="main-container">
                          {isFilter && <FiltersGroup isIdeal={isIdealFilterActive} changeIdeal={this.toggleIdealFilter} />}
                          {this.renderProductDetails()}
                        </div>
                    </div>
                <Footer />
            </>
        )
    }
}
export default Home
