import EmptyState from "@/app/components/common/EmptyState";
import listings from '@/app/static/listings.json';

import ListingClient from "./ListingClient";

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
