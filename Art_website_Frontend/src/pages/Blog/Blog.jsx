import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Blog() {
    return (
        <>
            <div className="relative mb-10">
                <LazyLoadImage
                    src="https://res.cloudinary.com/drwcrhwdq/image/upload/v1759501395/Red_and_Dark_Brown_Painting_art_Wall_Frame_Mockup_Instagram_post_vvi4qj.png"
                    alt="art advisory image"
                    className="w-screen md:h-screen h-96 object-cover"
                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="text-center ">
                        <h1 className="text-white_web text-6xl font-bold">MUSE TALES BLOG</h1>
                    </div>
                </div>
            </div>
            <div className="md:m-20 text-justify m-10">
                <h1 className="mb-5">Muse Tales Blog</h1>
                <p>
                    Here’s a polished blog draft in the style of your example for *Muse Tales*:

                    ---

                    <b>Exploring the Vibrant Currents of Contemporary Art: Muse Tales Highlights</b>

                    This year, the art world is embracing bold experimentation, immersive storytelling, and eco-conscious practices. Across painting, sculpture, and mixed media, artists are blending tradition with innovation, creating works that engage the senses and provoke reflection. At Muse Tales, we’ve curated a selection of standout creators whose works embody these trends.
                    <br />

                    <b className="mr-3 ml-5">1. Aria Delacroix</b>

                    Aria Delacroix transforms everyday objects into poetic sculptures, layering textiles, resin, and reclaimed materials. Her pieces explore impermanence and transformation, reflecting a growing dialogue between sustainability and artistry.
                    <br />
                    <br />

                    <b className="mr-3 ml-5">2. Kai Lin</b>

                    Kai Lin’s paintings merge hyperrealism with abstract brushwork, capturing fleeting moments in nature. With restrained color palettes and rhythmic compositions, her work evokes both serenity and introspection.
                    <br />
                    <br />

                    <b className="mr-3 ml-5">3. Mateo Rojas</b>

                    Mateo Rojas uses digital media to reimagine urban landscapes as surreal, almost dreamlike environments. His explorations of humanity’s relationship with space and technology challenge viewers to rethink familiar surroundings.
                    <br />
                    <br />

                    <b className="mr-3 ml-5">4. Liora Ben-Ami</b>

                    Liora Ben-Ami experiments with texture and form, combining thick impasto layers, sculptural elements, and metallic pigments. Her works invite viewers to not just see, but physically feel the rhythm and energy of the painting.
                    <br />
                    <br />

                    <b className="mr-3 ml-5">5. Soren Takahashi</b>

                    At Muse Tales’ recent showcase, Soren Takahashi impressed with his laser-engraved reliefs on wood panels. By merging craftsmanship and technology, he creates intricate patterns that blur the boundary between sculpture and painting.
                    <br />
                    <br />

                    <b className="mr-3 ml-5">6. Amara Singh</b>

                    Amara Singh’s mixed-media collages extend beyond conventional canvases, layering paper, fabric, and paint into vibrant, chaotic compositions. Her works celebrate natural forms and textures, balancing control and spontaneity in every piece.
                    <br />
                    <br />

                    Muse Tales artists are redefining contemporary art, combining sustainability, innovation, and expressive storytelling. Whether you are looking to explore new artistic voices, acquire one-of-a-kind pieces, or commission custom works, these creators offer a fresh perspective on the evolving art landscape.
                    <br />
                    <br />

                    <b className="mr-3">Discover more at Muse Tales</b>
                    If you’re interested in any of these works or exploring commissions, reach out to us at <b>contact@musetales.com</b>.

                </p>
            </div>
        </>
    )
}