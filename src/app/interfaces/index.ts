
interface ImageProps {
    url: string;
    width: number;
    height: number;
    mimeType: string;
    orientation: string;
    aspectRatio: number;
    type: string;
}

export interface PropertyAmenitiesProps {
    group: string;
    available: boolean;
    title: string;
    type: string;
}

interface PropertyDetailsProps {
    type: string;
    value: number;
}

interface PropertyLocationProps {
    lat: number;
    long: number;
    address: string;
    city: string;
    country: {
        code: string;
        title: string;
    };
    zip: string;
}

interface PropertyRatingsProps {
    accuracy: number;
    checkin: number;
    cleanliness: number;
    communication: number;
    location: number;
    value: number;
    guestSatisfactionOverall: number;
}

interface PropertyCurrencyProps {
    code: string;
    symbol: string;
    name: string;
}

interface PropertySleepingArrangementProps {
    title: string;
    subTitle: string;
    icons: string[];
}

export interface PropertyListingData {
    ref: string;
    info: {
        type: string;
        id: string;
        title: string;
        description: string;
        price: number;
        visibleReviewCount: number;
        available: boolean;
        maxGuestCapacity: number;
        images: {
            type: string;
            data: ImageProps[];
            count: number;
        };
        details: {
            type: string;
            data: PropertyDetailsProps[];
            count: number;
        };
        host?: {
            name: string;
            avatar: ImageProps;
            isSuperhost: boolean;
        } | undefined;
        amenities: {
            type: string;
            data: PropertyAmenitiesProps[];
            count: number;
        };
        sleepingArrangements: {
            type: string;
            data: PropertySleepingArrangementProps[];
            count: number;
        };
        mainImage: ImageProps;
        location: PropertyLocationProps;
        ratings: PropertyRatingsProps;
        currency: PropertyCurrencyProps;
    }
}

export interface MapMarkerProps {
    name: string;
    coordinates: number[]
}