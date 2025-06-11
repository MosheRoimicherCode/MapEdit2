// Vector operations
const vectorSubtract = (a, b) => ({
    x: a.x - b.x,
    y: a.y - b.y,
    z: a.z - b.z
});

const vectorAdd = (a, b) => ({
    x: a.x + b.x,
    y: a.y + b.y,
    z: a.z + b.z
});

const vectorScale = (v, s) => ({
    x: v.x * s,
    y: v.y * s,
    z: v.z * s
});

const dotProduct = (a, b) => a.x * b.x + a.y * b.y + a.z * b.z;

const vectorLength = (v) => Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);

const distance3D = (a, b) => vectorLength(vectorSubtract(a, b));

/**
 * Find the closest point on a 3D line to a given point
 * @param {Array} lineVertices - Array of vertices defining the line [{x, y, z}, ...]
 * @param {Object} point - The point to find closest distance to {x, y, z}
 * @returns {Object} - {closestPoint: {x, y, z}, distance: number, segmentIndex: number}
 */
function closestPointOnLine3D(lineVertices, point) {
    if (lineVertices.length < 2) {
        throw new Error("Line must have at least 2 vertices");
    }
    
    let minDistance = Infinity;
    let closestPoint = null;
    let closestSegmentIndex = -1;
    
    // Check each line segment
    for (let i = 0; i < lineVertices.length - 1; i++) {
        const segmentStart = lineVertices[i];
        const segmentEnd = lineVertices[i + 1];
        
        // Find closest point on this segment
        const result = closestPointOnSegment3D(segmentStart, segmentEnd, point);
        
        if (result.distance < minDistance) {
            minDistance = result.distance;
            closestPoint = result.point;
            closestSegmentIndex = i;
        }
    }
    
    return {
        closestPoint: closestPoint,
        distance: minDistance,
        segmentIndex: closestSegmentIndex
    };
}

/**
 * Find the closest point on a 3D line segment to a given point
 * @param {Object} segmentStart - Start point of segment {x, y, z}
 * @param {Object} segmentEnd - End point of segment {x, y, z}
 * @param {Object} point - The point to find closest distance to {x, y, z}
 * @returns {Object} - {point: {x, y, z}, distance: number, t: number}
 */
function closestPointOnSegment3D(segmentStart, segmentEnd, point) {
    // Vector from start to end of segment
    const segmentVector = vectorSubtract(segmentEnd, segmentStart);
    
    // Vector from start of segment to the point
    const pointVector = vectorSubtract(point, segmentStart);
    
    // Length squared of the segment
    const segmentLengthSq = dotProduct(segmentVector, segmentVector);
    
    // Handle degenerate case where segment has zero length
    if (segmentLengthSq === 0) {
        return {
            point: { ...segmentStart },
            distance: distance3D(segmentStart, point),
            t: 0
        };
    }
    
    // Calculate parameter t (0 <= t <= 1 for points on the segment)
    let t = dotProduct(pointVector, segmentVector) / segmentLengthSq;
    
    // Clamp t to [0, 1] to stay on the segment
    t = Math.max(0, Math.min(1, t));
    
    // Calculate the closest point on the segment
    const closestPoint = vectorAdd(segmentStart, vectorScale(segmentVector, t));
    
    // Calculate distance
    const dist = distance3D(closestPoint, point);
    
    return {
        point: closestPoint,
        distance: dist,
        t: t
    };
}

// Example usage:
const lineVertices = [
    { x: 0, y: 0, z: 0 },
    { x: 1, y: 1, z: 1 },
    { x: 2, y: 0, z: 2 },
    { x: 3, y: 1, z: 1 }
];

const testPoint = { x: 1.5, y: 0.5, z: 0.5 };

const result = closestPointOnLine3D(lineVertices, testPoint);

console.log("Closest point:", result.closestPoint);
console.log("Distance:", result.distance);
console.log("Segment index:", result.segmentIndex);

// Test with a simple 2-vertex line
const simpleLine = [
    { x: 0, y: 0, z: 0 },
    { x: 2, y: 2, z: 2 }
];

const simpleTestPoint = { x: 1, y: 0, z: 1 };
const simpleResult = closestPointOnLine3D(simpleLine, simpleTestPoint);

console.log("\nSimple line test:");
console.log("Closest point:", simpleResult.closestPoint);
console.log("Distance:", simpleResult.distance);