
import Image from 'next/image'
import React from 'react'
import blogBanner from "@/assets/common/blog/blogBanner.png"

const Blog = () => {
  return (
    <div>
      <div className='maxWidth space-y-20'>

        {/* -------------------------- Deep Fake Content -------------------------- */}
        <div className='space-y-5 py-16'>
          <h2 className='text-xl sm:text-3xl md:text-6xl font-bold text-font02 pb-3'>What is Deep Fake Content?</h2>
          <p className='text-justify text-lg text-gray-700'>
            <span className="float-right ml-8 mb-4 mt-2">
              <Image src={blogBanner} width={800} height={600} alt="content image" className="rounded" />
            </span>
            Lorem ipsum dolor sit amet consectetur. Lacus bibendum integer ut rutrum massa diam tristique tristique vel. Vehicula eu non molestie elit urna vestibulum proin vestibulum. Gravida praesent turpis laoreet elementum molestie et mus viverra. Tincidunt neque tincidunt id quis. Arcu mi aliquam ac amet facilisis nibh id non. At tortor tristique mattis neque vitae risus vivamus urna. Velit orci dui aliquam arcu eu aenean ultrices. At aliquam quis faucibus lorem massa. Nunc in nec sem integer penatibus nisi. Ante ipsum diam lacinia tempus urna felis. Blandit pulvinar mattis in ut massa nisl pellentesque. Iaculis tortor velit in sit quam eget. Sed consequat eget orci augue nibh. Rhoncus sed ipsum mauris egestas. Velit lectus integer ultricies ullamcorper. A cum at laoreet nunc euismod molestie ac. Tellus tortor et morbi viverra ut ullamcorper semper. Vulputate et interdum integer penatibus. Velit nisl et venenatis volutpat. Morbi facilisis enim magsuspendisse pulvinar. Etiam velit placerat cursus laoreet Lorem ipsum dolor sit amet consectetur. Lacus bibendum integer ut rutrum massa diam tristique tristique vel. Vehicula eu non molestie elit urna vestibulum proin vestibulum. Gravida praesent turpis laoreet elementum molestie et mus viverra. Tincidunt neque tincidunt id quis. Arcu mi aliquam ac amet facilisis nibh id non. At tortor tristique mattis neque vitae risus vivamus urna. Velit orci dui aliquam arcu eu aenean ultrices. At aliquam quis faucibus lorem massa. Nunc in nec sem integer penatibus nisi. Ante ipsum diam lacinia tempus urna felis. Blandit pulvinar mattis in ut massa nisl pellentesque. Iaculis tortor velit in sit quam eget. Sed consequat eget orci augue nibh. Rhoncus sed ipsum mauris egestas. Velit lectus integer ultricies ullamcorper. A cum at laoreet nunc euismod molestie ac. Tellus tortor et morbi viverra ut ullamcorper semper. Vulputate et interdum integer penatibus. Velit nisl et venenatis volutpat. Morbi facilisis enim magna nunc dolor arcu eu. Metus rhoncus scelerisque augue morbi volutpat. Sed dui elementum pellentesque integer etiam risus. Risus eget enim egestas suspendisse. Ac vel ut cras lacus libero neque risus ipsum et. Sed eu dolor gravida varius tellus ante iaculis. Tortor quam adipiscing venenatis quam sed sed pharetra ornare. Magna neque orci turpis neque nulla curabitur congue. Laoreet sed sit mollis integer. Ut nulla sit adipiscing in sed auctor tortor nisl. Lectus rhoncus purus praesent tortor ornare id nam. Sed fermentum eget ornare arcu integer ullamcorper. Etiam velit tortor morbi ornare curabitur a pellentesque. Ut ac adipiscing pellentesque cum pharetra enim sagittis. Ac ut non quis aenean faucibus semper quam a. Nulla non laoreet elit dui aliquam mattis. Auctor scelerisque egestas sed egestas quis. Tincidunt eget consequat massa in ac dignissim dignissim. Interdum enim risus sed amet mattis lorem. Ultrices habitant tortor dictum euismod vitae nec. Semper eu turpis sed molestie amet ullamcorper sed urna integer. Dui phasellus id gravida risus quis faucibus et diam. Vestibulum quam lectus gravida sem cursus. Tellus sed volutpat ullamcorper ac massa. Non amet dui quis dolor amet volutpat phasellus sed. Phasellus tellus nulla vitae ut nulla amet arcu arcu. Quis euismod arcu libero in cum eget auctor aliquet euismod. Nec at elementum suspendisse pulvinar. Etiam velit placerat cursus laoreet. Eu volutpat hendrerit sagittis ipsum in risus facilisis.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Blog