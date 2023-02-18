import '../styles/swipe.scss'

const Swipe = () => {

    let activeIndex = 0;

    const groups = document.getElementsByClassName("card-group");

    const handleLoveClick = () => {
        const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
        const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
        const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

        currentGroup.dataset.status = "after";

        nextGroup.dataset.status = "becoming-active-from-before";
        setTimeout(() => {
            nextGroup.dataset.status = "active";
            activeIndex=nextIndex;
        })
    }

    const handleHateClick = () => {
        const nextIndex = activeIndex - 1 >= 0 ? activeIndex -1 : groups.length - 1;
        const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
        const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

        currentGroup.dataset.status = "before";

        nextGroup.dataset.status = "becoming-active-from-after";
        setTimeout(() => {
            nextGroup.dataset.status = "active";
            activeIndex=nextIndex;
        })
    }

    return(
        <div className="card-swiper">
            <div className="card-groups">
                <div className="card-group" data-index="0" data-status="active">
                    <div className="little-card card"> 
                        
                    </div>
                    <div className="big-card card"> 

                    </div>
                    <div className="little-card card"> 
                        
                    </div>
                    <div className="big-card card"> 
                        
                    </div>
                    <div className="little-card card"> 
                        
                    </div>
                    <div className="big-card card"> 
                        
                    </div>
                    <div className="little-card card"> 
                        
                    </div>
                    <div className="big-card card"> 
                        
                    </div>
                </div>  
                <div className="card-group" data-index="1" data-status="unknown">
                    <div className="little-card card"> 
                        
                    </div>
                    <div className="big-card card"> 

                    </div>
                    <div className="little-card card"> 
                        
                    </div>
                    <div className="big-card card"> 
                        
                    </div>
                    <div className="little-card card"> 
                        
                    </div>
                    <div className="big-card card"> 
                        
                    </div>
                    <div className="little-card card"> 
                        
                    </div>
                    <div className="big-card card"> 
                        
                    </div>
                </div>        
                <div className="card-group" data-index="2" data-status="unknown">
                    <div className="little-card card"> 
                        
                    </div>
                    <div className="big-card card"> 

                    </div>
                    <div className="little-card card"> 
                        
                    </div>
                    <div className="big-card card"> 
                        
                    </div>
                    <div className="little-card card"> 
                        
                    </div>
                    <div className="big-card card"> 
                        
                    </div>
                    <div className="little-card card"> 
                        
                    </div>
                    <div className="big-card card"> 
                        
                    </div>
                </div>
            </div>
            <div className="card-swiper-buttons">
                <button id="hate-button" onClick={handleHateClick}>
                    <i className="fa-solid fa-x"></i>
                </button>
                <button id="love-button">
                    <i className="fa-solid fa-heart" onClick={handleLoveClick}></i>
                </button>
            </div>
        </div>
    );
};

export default Swipe;