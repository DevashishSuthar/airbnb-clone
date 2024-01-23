import EmptyState from "@/components/general/empty-state";
import listings from '@/static/listings.json';

import ListingClient from "./listing-client";

interface IParams {
    listingId?: string;
}

const DetailPage = async ({ params }: { params: IParams }) => {
    const listingData = listings.data.find((property) => property.info.id === params.listingId);

    if (!listingData) {
        return <EmptyState />;
    }

    return (
        <ListingClient
            listing={listingData}
        />
    );
}

export default DetailPage;
