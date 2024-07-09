import React from 'react';
import './SectionOne.css';

import community from '../images/community.png';
import contact from '../images/contact.png';
import employment from '../images/employment.png';
import empowerment from '../images/empowerment.png';
import partner from '../images/partner.png';
import review from '../images/review.png';
import reward from '../images/reward.png';
import scholarships from '../images/scholarships.png';
import support from '../images/support.png';
import upskilled from '../images/upskilled.png';

function SectionOne() {
    const data = [
        {
            icon: scholarships,
            title: "Scholarships",
            description: "This means that you will never have to worry about paying a penny to learn a new skill. Our partners have ensured that you are able to upskill at the comfort of your home with no cost to you."
        },
        {
            icon: contact,
            title: "Free Counselling Sessions",
            description: "Every student has access to a number of wellbeing and counselling sessions with our partners at frontline therapists."
        },
        {
            icon: support,
            title: "Childcare Support",
            description: "Every mum on our bootcamps is eligible to apply to receive up to £250 in childcare vouchers as a way of supporting you whilst learning."
        },
        {
            icon: review,
            title: "4.75 / 5 Average Reviews",
            description: "We are focused on ensuring every student has the best experience our bootcamps have to offer."
        },
        {
            icon: employment,
            title: "75% Employment Rate",
            description: "This is from our 2020 outcomes. Our students have been able to go on to work at some awesome organisations from junior to senior levels."
        },
        {
            icon: upskilled,
            title: "560 people Upskilled",
            description: "Since 2020, we have upskilled 560 to start a career in tech and progress into more senior roles in tech in companies like Northrop Grumman, Zappi, KPMG and many more."
        },
        {
            icon: partner,
            title: "Dedicated Career Support from Day One",
            description: "You will have Hannah, our employability and career coach here to support you from your first day. She will help you with your LinkedIn, CV and also interview coaching."
        },
        {
            icon: empowerment,
            title: "Exclusive Access to Open Roles to All Our Hiring Partners",
            description: "Exclusive access to open roles to all our hiring partners."
        },
        {
            icon: reward,
            title: "Cool Rewards",
            description: "We like to reward our students during really important milestones. All our rewards come with an element of surprise."
        },
        {
            icon: community,
            title: "Empowerment Evenings and Events",
            description: "Free access to empowerment workshops and events by men and women who are excelling in their careers and businesses."
        },
        {
            icon: community,
            title: "7000+ Community of talents",
            description: "We've grown an organic community of 7000 people who are passionate about tech and the intersections of it with other industries."
        }
    ];

    return (
        <div className="section-one">
            <h1>Bespoke all round <span>support!</span></h1>
            <div className="cards-container">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="icon">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SectionOne;
