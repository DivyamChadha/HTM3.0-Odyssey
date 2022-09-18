import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

import React from 'react';
import Select from 'react-select';
// import { Search, Option } from "searchpal";
import makeAnimated from 'react-select/animated';
import { useState } from 'react';
import './Filter.css'
import Company from '../Company/Company'

const animatedComponents = makeAnimated();  



const genderTags = [
    { label: "Male",value:11},
    { label: "Female", value:12 },
    { label: "Bigender", value: 13 }
  ];

const ageTags = [
    { label: "Less than 18", value:11},
    { label: "18-22", value:12 },
    { label: "23-30", value: 13 }
  ];

const raceTags = [
    { label: "Asian", value:11},
    { label: "African American / Black", value:12 },
  ];

const countryTags = [
    { label: "India", value:11},
    { label: "USA", value:12 },
]

const getStarScore = value => {
    if (value < 0.3)
        return <div className="starRow"><BsStar /><BsStar /> <BsStar /> <BsStar /> <BsStar /> </div>
    else if (value < 0.8)
        return <div className="starRow"> <BsStarHalf /> <BsStar /> <BsStar /> <BsStar /> <BsStar /> </div>
    else if (value < 1.2)
        return <div className="starRow">  <BsStarFill /> <BsStar /> <BsStar /> <BsStar /> <BsStar /> </div>
    else if (value < 1.8)
        return <div className="starRow"> <BsStarFill /> <BsStarHalf /> <BsStar /> <BsStar /> <BsStar /> </div>
    else if (value < 2.2)
        return <div className="starRow"> <BsStarFill /> <BsStarFill /> <BsStar /> <BsStar /> <BsStar /> </div>
    else if (value < 2.7)
        return <div className="starRow"> <BsStarFill /> <BsStarFill /> <BsStarHalf /> <BsStar /> <BsStar /> </div>
    else if (value < 3.2)
        return <div className="starRow"> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStar /> <BsStar /> </div>
    else if (value < 3.7)
        return <div className="starRow"> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /> <BsStar /> </div>
    else if (value < 4.2)
        return <div className="starRow"> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStar /> </div>
    else if (value < 4.7)
        return <div className="starRow"> <BsStarFill /><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /> </div>
    else 
        return <div className="starRow"> <BsStarHalf /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> </div>
}

const Filter =() => { 
    const [ genderTag, setGenderTag ] = useState();
    const [ raceTag, setRaceTag ] = useState();
    const [ countryTag, setCountryTag ] = useState();
    const [ ageTag, setAgeTag ] = useState();
    const [ selectedWorkplace, setSelectedWorkplace ] = useState();
    const [ workplaceSuggestion, setWorkplaceSuggestions ] = useState([]);
    const [ searchOpen, setSearchOpen ] = useState(false);

    return (
        <>
        <div className="filter_container">
            <div className="filter_list">
                <Select className="filter" options={genderTags}
                defaultValue={genderTag} 
                components={animatedComponents}
                value={genderTag}
                onChange= {setGenderTag}
                />

                <Select className="filter"  options={raceTags}
                defaultValue={raceTag} 
                components={animatedComponents}
                value={raceTag}
                onChange= {setRaceTag}
                />

                <Select className="filter" options={ageTags}
                defaultValue={ageTag} 
                components={animatedComponents}
                value={ageTag}
                onChange= {setAgeTag}
                />

                <Select className="filter" options={countryTags}
                defaultValue={countryTag} 
                components={animatedComponents}
                value={countryTag}
                onChange= {setCountryTag}
                />

            </div>
            <button className="test_search" onClick={() => console.log(genderTag, raceTag, countryTag, ageTag)}>test</button>
            <div className='workplaceSearchContainer'>
                
            <button onClick={() => setSearchOpen(true)}>Search for a workspace...</button>

                {/* <Search
                    label="Search for a workspace..."
                    open={searchOpen}
                    onClose={() => setSearchOpen(false)}
                    link={({ href, children }) => <a href={href}>{children}</a>}
                >
                    {users.map((user) => (
                    <Option
                        label={user.name}
                        sublabel={user.email}
                        img={{ src: user.avatar, alt: `${user.name} profile picture` }}
                        href={`/users/${user.id}`}
                        keywords={(getKeywords) =>
                        getKeywords(
                            user.email,
                            user.social && user.social.handle,
                            user.organizations.map((org) => [
                            org.name,
                            org.locations.map((location) => [
                                location.city,
                                location.state,
                            ]),
                            ])
                        )
                        }
                        key={user.id}
                    >
                        <Detail label="Joined" value={user.joined} />
                        {user.organizations.length && (
                        <Detail
                            label="Organizations"
                            value={<Organizations items={user.organizations} />}
                        />
                        )}
                    </Option>
                    ))}
                </Search> */}

            </div>

            <Company/>

        </div>

        <div className="feedback_container">
            <div className="imp">
            <div className="feedback_title">
                <h3>Feedback Ratings</h3>
            </div>
            <div className="feedback_header">
                <h4>Strongly Disagree</h4>
                <h4>Disagree</h4>
                <h4>Neither Agree nor Disagree</h4>
                <h4>Agree</h4>
                <h4>Strongly Agree</h4>
            </div>
            </div>

            {
                ['I can see myself working here in 5 years',
                'Clear understanding of strategic goals',
                'I can see how my work affects the companys success',
                'I know what is expected of when it comes to my goals',
                'Everyone is on the same team at my company',
                'My manager recognisesc apitalises on my strengths',
                'I always want to give my best whenever at work',
                'I w\'m proud to be part of this company',
                'I always recommend my company to others',
                'The leaders really know what they\'re doing',
                'I believe in my companys mission'].map((item)=>(
                    <div className="feedback_ques" key={item}>
                <h3>{item}</h3>
                {getStarScore(2)}
               </div>
                ))
            }
            
        </div>
        
        
        </>
    );
  }; 
 
export default Filter;