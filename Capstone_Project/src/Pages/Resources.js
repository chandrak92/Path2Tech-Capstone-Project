import TextBubble from "../Components/TextBubble.js";
import "../Style/resource.css";

const Resources = () => {
    return(
        <section className="Resources-container">
            <h1>Resources</h1>
            <section className="video-container">
                <h2>Reasons to Love Donating</h2>
                <iframe
                    width="500"
                    height="300"
                    src="https://youtu.be/TYzfyqg9quc?si=nfbnedAjNAsKhuZY"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Donating Video"
                ></iframe>
            </section>
            <section className="orgs">
                <h2>Organizations</h2>
                <h3>There are many organizations where you can donate clothing to support various causes and help reduce textile waste. Here are some well-known ones:</h3><br />
                <br />
                <p><span className="bold-text"><a href="https://www.goodwill.org">Goodwill: </a></span> Accepts clothing donations and sells them in their thrift stores, using the proceeds to fund job training and community-based programs.</p><br />
                <p><span className="bold-text"><a href="https://www.salvationarmyusa.org">The Salvation Army: </a></span> Collects clothing donations to sell in their family stores, with profits supporting their rehabilitation programs and community services.</p><br />
                <p><span className="bold-text">Dress for Success:</span> Provides professional attire to women in need, helping them achieve economic independence and succeed in their careers.</p><br />
                <p><span className="bold-text">Planet Aid:</span> Collects and recycles used clothing to support development projects and promote environmental sustainability.</p><br />
                <p><span className="bold-text">Vietnam Veterans of America (VVA):</span> Accepts clothing donations to support programs for veterans and their families.</p><br />
                <p><span className="bold-text">Society of St. Vincent de Paul:</span> Operates thrift stores where donated clothing is sold to support their charitable services and programs for those in need.</p><br />
                <p><span className="bold-text">American Red Cross:</span> Accepts clothing donations to support disaster relief efforts and aid those affected by emergencies.</p><br />
                <p><span className="bold-text">Local Homeless Shelters and Domestic Violence Shelters:</span> Often need clothing donations to provide for individuals and families in crisis situations.</p><br />
                <p><span className="bold-text">Schools and Churches:</span> Many local schools and churches run clothing drives or have partnerships with organizations that distribute donated clothes to those in need.</p><br />
                <p><span className="bold-text">Online Platforms like Freecycle or Buy Nothing Groups:</span> These platforms allow you to give away clothing directly to people in your community who can use them.</p><br />
                <p>These organizations help ensure that your donated clothing reaches those in need, reducing waste and supporting various social and environmental causes.</p><br />
                <br />
                <h3>There are many </h3>
            </section>
            <section className="actions">
                <h3>Actions</h3>
                <p>There are different ways you can help unwanted clothing avoid the landfill. <br />
                    <TextBubble text="- Garage sale" /><br />
                    <TextBubble text="- Sell to consignment shop"/><br />
                    <TextBubble text="- Donate to Goodwill or Salvation Army"/>
                </p>
            </section>
            <br />
        </section>
    )
}
export default Resources