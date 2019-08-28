import React,{Component} from 'react';
import Tab from './Tab';
import PfItem from './PfItem';
import Slider from "react-slick";

class PortfolioList extends Component {
  constructor(props){
    super(props);
    this.state = {
      // category:['All Site','Business','Block chain','School/Academy','Community','Medical Institutions','Shopping mall','Arts & Culture','ETC']
      category:[
        { name: 'All Site', selected: true },
        { name: 'Issuers', selected: false },
        { name: 'Investors', selected: false },
        { name: 'Service Providers', selected: false}
      ],

    }
  }


  _tabClick = (categoryIndex) => {
    this.props.tabClick(categoryIndex)

    const { category } = this.state

    category.forEach(el=>{
      el.selected=false;
    })
    category[categoryIndex].selected = true;

    this.setState({
      category 
    })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    let lists = [];
    let data = this.props.data;
    for(let i=0; i < data.length; i++){
      lists.push( 
        <PfItem
          key={data[i].id}
          id={data[i].id}
          title={data[i].title}
          sTitle={data[i].sTitle}
          imgSrc={data[i].imgSrc}
          desc={data[i].desc}
          skill={data[i].skill}
          itemClick={() => this.props.itemClick(data[i])}
        >
        </PfItem>
        );
    }
    return (
      <div className="content">
        <Tab data={this.state.category} tabClick={this._tabClick}></Tab>
        <Slider {...settings} className="pf-list">
            {lists}
        </Slider>
      </div>
    );
  }
}

  
export default PortfolioList;
