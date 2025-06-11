// Vector operations - IE compatible
function vectorSubtract(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y,
        z: a.z - b.z
    };
}

function vectorAdd(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y,
        z: a.z + b.z
    };
}

function vectorScale(v, s) {
    return {
        x: v.x * s,
        y: v.y * s,
        z: v.z * s
    };
}

function dotProduct(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}

function vectorLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}

function distance3D(a, b) {
    return vectorLength(vectorSubtract(a, b));
}

function copyPoint(point) {
    return {
        x: point.x,
        y: point.y,
        z: point.z
    };
}

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
    
    var minDistance = Number.POSITIVE_INFINITY;
    var closestPoint = null;
    var closestSegmentIndex = -1;
    
    // Check each line segment
    for (var i = 0; i < lineVertices.length - 1; i++) {
        var segmentStart = lineVertices[i];
        var segmentEnd = lineVertices[i + 1];
        
        // Find closest point on this segment
        var result = closestPointOnSegment3D(segmentStart, segmentEnd, point);
        
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
    var segmentVector = vectorSubtract(segmentEnd, segmentStart);
    
    // Vector from start of segment to the point
    var pointVector = vectorSubtract(point, segmentStart);
    
    // Length squared of the segment
    var segmentLengthSq = dotProduct(segmentVector, segmentVector);
    
    // Handle degenerate case where segment has zero length
    if (segmentLengthSq === 0) {
        return {
            point: copyPoint(segmentStart),
            distance: distance3D(segmentStart, point),
            t: 0
        };
    }
    
    // Calculate parameter t (0 <= t <= 1 for points on the segment)
    var t = dotProduct(pointVector, segmentVector) / segmentLengthSq;
    
    // Clamp t to [0, 1] to stay on the segment
    // IE doesn't have Math.max/min with multiple args in older versions
    if (t < 0) t = 0;
    if (t > 1) t = 1;
    
    // Calculate the closest point on the segment
    var closestPoint = vectorAdd(segmentStart, vectorScale(segmentVector, t));

    console.log("closestPoint")
    console.log(closestPoint.x)
    console.log(closestPoint.y)
    console.log(closestPoint.z)
    // Calculate distance
    var dist = distance3D(closestPoint, point);
    
    console.log("distance="+dist)

    return {
        point: closestPoint,
        distance: dist,
        t: t
    };
}

// Utility function for older IE versions that might not have console.log
function safeLog(message, value) {
    if (typeof console !== 'undefined' && console.log) {
        if (value !== undefined) {
            console.log(message, value);
        } else {
            console.log(message);
        }
    }
}

// // Example usage:
// var lineVertices = [
//     { x: 0, y: 0, z: 0 },
//     { x: 1, y: 1, z: 1 },
//     { x: 2, y: 0, z: 2 },
//     { x: 3, y: 1, z: 1 }
// ];

// var testPoint = { x: 1.5, y: 0.5, z: 0.5 };

// var result = closestPointOnLine3D(lineVertices, testPoint);

// safeLog("Closest point:", result.closestPoint);
// safeLog("Distance:", result.distance);
// safeLog("Segment index:", result.segmentIndex);

// // Test with a simple 2-vertex line
// var simpleLine = [
//     { x: 0, y: 0, z: 0 },
//     { x: 2, y: 2, z: 2 }
// ];

// var simpleTestPoint = { x: 1, y: 0, z: 1 };
// var simpleResult = closestPointOnLine3D(simpleLine, simpleTestPoint);

// safeLog("Simple line test:");
// safeLog("Closest point:", simpleResult.closestPoint);
// safeLog("Distance:", simpleResult.distance);