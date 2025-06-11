        var selectedObject;
        var SplitPosition;

        
        // SGWorld.AttachEvent("OnSGWorld", OnSGWorld)

        function OnSGWorld(EventID,EventParam){
            alert("EventId fo OnSGWolrd Event: " + EventID)
        }


        function GetObjectVertexes(object){
            var points = convertGeometryPointsToArray(object)
            //alert(points[0].x)
            return points
        }


        function GetItemName(Id){
            return SGWorld.ProjectTree.GetItemName(Id);
        }
        
        function SplitLine(){
            //alert(1)
            try{
            //SGWorld.AttachEvent("OnLButtonDown", GetClickPosition);
            AddEvent()
            //SGWorld.Command.Execute("1021","")


            RemoveEvent()	
            }
            catch (error){
                console.error(error);
                alert(error)
            }

        }

        function GetClickPosition(X,Y,Flags){
            
        }

function OnObjectUnderCursorChanged(ObjectEnteredBool, ObjectID){
            if(ObjectEnteredBool){
                var Object = SGWorld.ProjectTree.GetObject(ObjectID);
 
                if(Object.Geometry && Object.Geometry.GeometryType == 1){
                    mousePosition = SGWorld.Window.GetMouseInfo()
            mouseGeoPoition = SGWorld.Window.PixelToWorld(mousePosition.X, mousePosition.Y).Position

            var label1 = SGWorld.Creator.CreateLabel(mouseGeoPoition, "", "C:\\Users\\User\\AppData\\Local\\Temp\\VH.png",SGWorld.Creator.CreateLabelStyle());
                }           
            
}}
        function OnObjectSelected(ObjectID){
            try{
            var Object = SGWorld.ProjectTree.GetObject(ObjectID);
            var ObjectName = SGWorld.ProjectTree.GetItemName(ObjectID);
            
            //Convert object to absolute, and then return to original position, or in the mouse altititude, get the same altitude type as the line
            var objectOriginalEltitudeTypeStatus = Object.Position.AltitudeType;
            Object.Position.ChangeAltitudeType(3)
            mousePosition = SGWorld.Window.GetMouseInfo()
            mouseGeoPoition = SGWorld.Window.PixelToWorld(mousePosition.X, mousePosition.Y).Position
           

            //alert(Object.Geometry.GeometryTypeStr);
            var points =  GetObjectVertexes(Object)

            //console.log("amount of feature vertexes= =" + points.length)

            target = { x: mouseGeoPoition.X, y:  mouseGeoPoition.Y, z: mouseGeoPoition.Altitude};
            // console.log(target.x)
            // console.log(target.y)
            // console.log(target.z)

            var point = closestPointOnLine3D(points, target);
            // safeLog("X coordinate:", point.closestPoint.x);
            // safeLog("Y coordinate:", point.closestPoint.y);
            // safeLog("Z coordinate:", point.closestPoint.z);


            var labelPos = SGWorld.Creator.CreatePosition(point.closestPoint.x, point.closestPoint.y, point.closestPoint.z, 3, 0,0,0,0)
            var label1 = SGWorld.Creator.CreateLabel(labelPos, "", "C:\\Users\\User\\AppData\\Local\\Temp\\VH.png",SGWorld.Creator.CreateLabelStyle());


            //console.log(closestPoint)
            //findTwoClosestPoints(target,points)
            // var previusVertex = findSegmentForPoint(points, target) //the click its located between the index and the index+1 vertex
            // console.log("vertex index =" + previusVertex)
            //alert("vertex index =" + point.segmentIndex)
            var result = splitArrayAtIndex(points, point.segmentIndex, point.closestPoint);

            SGWorld.Creator.CreatePolylineFromArray(result[0], "#154495",3)
            SGWorld.Creator.CreatePolylineFromArray(result[1], "#197775",3)

            // Object.Position.ChangeAltitudeType(objectOriginalEltitudeTypeStatus)

            RemoveEvent()
            }
            catch (error){
                console.error(error);
                alert(error)
            }
        }

        function AddEvent(){
            SGWorld.AttachEvent("OnObjectSelected", OnObjectSelected);
            //SGWorld.AttachEvent("OnObjectUnderCursorChanged", OnObjectUnderCursorChanged);

            //SGWorld.AttachEvent("On")
            SGWorld.Command.Execute("1021","")
        }

        function RemoveEvent(){
            SGWorld.DetachEvent("OnObjectSelected", OnObjectSelected);
            //SGWorld.DetachEvent("OnObjectUnderCursorChanged", OnObjectUnderCursorChanged);
        }

        function convertGeometryPointsToArray(object) {
            var points = [];
            var geometryPoints = object.Geometry.Points;
            var count = geometryPoints.Count;

            for (var i = 0; i < count; i++) {
                var pt = geometryPoints.Item(i);
                points.push({
                    x: pt.X,
                    y: pt.Y,
                    z: pt.Z
                });
            }

            return points;
        }

        function splitArrayAtIndex(vertices, index, newPoint) {
            // Ensure the index is within the bounds of the array
            if (index < 0 || index >= vertices.length) {
                console.error("Index is out of bounds");
                return null;
            }

            // Split the array into two parts
            const firstArray = vertices.slice(0, index + 1);  // From 0 to index
            const secondArray = vertices.slice(index + 1);   // From index + 1 to end

            // Function to convert array of vertices to [x, y, z, x, y, z, ...] format
            var convertToXYZArray = function(arr) {
                var result = [];
                for (var i = 0; i < arr.length; i++) {
                    result = result.concat([arr[i].x, arr[i].y, arr[i].z]);
                }
                return result;
            };

            // Convert both arrays to the desired format
            var firstArrayXYZ = convertToXYZArray(firstArray);
            var secondArrayXYZ = convertToXYZArray(secondArray);

            if (newPoint) {
                firstArrayXYZ.push(newPoint.x, newPoint.y, newPoint.z);  // Adds to the last position of the first array
                secondArrayXYZ.unshift(newPoint.x, newPoint.y, newPoint.z);  // Adds to the first position of the second array
            }

            //return [ new VBArray(firstArrayXYZ), new VBArray(secondArrayXYZ) ];
            return [ firstArrayXYZ, secondArrayXYZ];
        }




        function findSegmentForPoint(lineVertices, point) {
            //alert("findSegmentForPoint")
            var tolerance = SGWorld.Navigate.GetPosition(3).Altitude * 0.0001
            //alert(tolerance )
            for (let i = 0; i < lineVertices.length - 1; i++) {
                const p1 = lineVertices[i];
                const p2 = lineVertices[i + 1];

                // Check if the point lies between p1 and p2 on the segment
                if (isPointOnSegment(p1, p2, point.x, point.y, point.z, tolerance)) {
                    //alert(i + " - " + (i + 1));  // Alert showing the segment's indices
                    return i; // Return the index of the segment (between p1 and p2)
                }
            }
            alert("No segment found")
            return -1; // Return -1 if the point is not on any segment (error case)
        }

        // Function to check if the point lies on the segment defined by p1 and p2
        function isPointOnSegment(p1, p2, px, py, pz, tolerance) {
            // Calculate the segment vector and point vector
            var segmentVector = { x: p2.x - p1.x, y: p2.y - p1.y, z: p2.z - p1.z };
            var pointVector = { x: px - p1.x, y: py - p1.y, z: pz - p1.z };

            // Cross product of segment and point vector should be close to zero if the point is on the line
            var crossProduct = {
                x: segmentVector.y * pointVector.z - segmentVector.z * pointVector.y,
                y: segmentVector.z * pointVector.x - segmentVector.x * pointVector.z,
                z: segmentVector.x * pointVector.y - segmentVector.y * pointVector.x
            };

            // If the cross product is not nearly zero, the point is not on the line
            var crossProductLength = Math.sqrt(Math.pow(crossProduct.x, 2) + Math.pow(crossProduct.y, 2) + Math.pow(crossProduct.z, 2));
            if (crossProductLength > tolerance) {
                return false;
            }
            // Check if the point is within the bounds of the segment
            var dotProduct = segmentVector.x * pointVector.x + segmentVector.y * pointVector.y + segmentVector.z * pointVector.z;
            var segmentLengthSquared = Math.pow(segmentVector.x, 2) + Math.pow(segmentVector.y, 2) + Math.pow(segmentVector.z, 2);

            // If the dot product is between 0 and the segment length squared, the point is on the segment
            return dotProduct >= 0 && dotProduct <= segmentLengthSquared;
        }

        function isPointOnSegment2(p1, p2, px, py, pz, tolerance) {
            // Segment vector
            var dx = p2.x - p1.x;
            var dy = p2.y - p1.y;
            var dz = p2.z - p1.z;

            // Vector from p1 to the point
            var vx = px - p1.x;
            var vy = py - p1.y;
            var vz = pz - p1.z;

            // Segment length squared
            var lengthSq = dx * dx + dy * dy + dz * dz;

            // Handle degenerate segment
            if (lengthSq === 0) {
                return {
                    isOnSegment: false,
                    closestPoint: { x: p1.x, y: p1.y, z: p1.z }
                };
            }

            // Projection factor t of point onto the segment
            var t = (vx * dx + vy * dy + vz * dz) / lengthSq;

            // Clamp t to the segment [0,1]
            t = Math.max(0, Math.min(1, t));

            // Closest point on the segment
            var closest = {
                x: p1.x + t * dx,
                y: p1.y + t * dy,
                z: p1.z + t * dz
            };

            // Distance from point to closest point
            var dist = Math.sqrt(Math.pow(px - closest.x, 2) + Math.pow(py - closest.y, 2) + Math.pow(pz - closest.z, 2));

            return {
                isOnSegment: dist <= tolerance,
                closestPoint: closest
            };
        }