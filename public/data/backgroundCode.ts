export const background_code = `
public void GeneratePlane()
{
    //Init Variables
    ObjectGenerator objectGenerator = FindObjectOfType<ObjectGenerator>();
    SimSettings simsettings = FindObjectOfType<SimSettings>();
    terrainSize = simsettings.terrainSize;
    int arraySize = (terrainSize + 1) * (terrainSize + 1);
    Mesh newMesh = new Mesh();
    Vector3[] vertices = new Vector3[arraySize];
    Vector2[] uvs = new Vector2[arraySize];
    int[] triangles = new int[terrainSize * terrainSize * 2 * 3];
    float topVertex = Mathf.NegativeInfinity;
    float botVertex = Mathf.Infinity;

    // Set Vertex Values
    int vertexPos = 0;
    for (int i = terrainSize / 2; i >= ((terrainSize / 2) *(-1)); i--)
    {
        for (int v = terrainSize/2; v >= ((terrainSize/2)*(-1)); v--)
        {
            vertices[vertexPos] = new Vector3(v, 0, i);
            vertexPos += 1;
        }
    }

    //Set UV values
    for(int i = 0, z = 0; z < terrainSize + 1; z++)
    {
        for(int x = 0; x < terrainSize + 1; x++)
        {
            uvs[i] = new Vector2((float)x / (terrainSize + 1), (float)z / (terrainSize + 1));
            i++;
        }
    }

    //Set Triangle Values
    int triPos = 0;
    for(int i = 0; i < arraySize - (terrainSize + 1); i++)
    {
        if(CheckEnd(i) || i == 0)
        {
            triangles[triPos] = i;
            triPos += 1;
            triangles[triPos] = i + (terrainSize + 1);
            triPos += 1;
            triangles[triPos] = i + (terrainSize + 2);
            triPos += 1;

            triangles[triPos] = i;
            triPos += 1;
            triangles[triPos] = i + (terrainSize + 2);
            triPos += 1;
            triangles[triPos] = i + 1;
            triPos += 1;
        }
        
    }

    // Add Smaller Noise
    int offset = Random.Range(0, 100);
    for (int i = 0; i < vertices.Length; i++)
    {
        float xVertex = vertices[i].x + (terrainSize / 2) + offset;
        float zVertex = vertices[i].z + (terrainSize / 2) + offset;
        vertices[i] = new Vector3(vertices[i].x, Mathf.PerlinNoise(xVertex / 3f, zVertex / 3f), vertices[i].z);
    }

    // Add Larger Noise
    offset = Random.Range(0, 100);
    for (int i = 0; i < vertices.Length; i++)
    {
        float xVertex = vertices[i].x + (terrainSize / 2) + offset;
        float zVertex = vertices[i].z + (terrainSize / 2) + offset;
        vertices[i] = new Vector3(vertices[i].x, vertices[i].y + Mathf.PerlinNoise(xVertex / 15f, zVertex / 15f) * 7f, vertices[i].z);
    }

    // Add Even Larger Noise
    offset = Random.Range(0, 100);
    for (int i = 0; i < vertices.Length; i++)
    {
        float xVertex = vertices[i].x + (terrainSize / 2) + offset;
        float zVertex = vertices[i].z + (terrainSize / 2) + offset;
        vertices[i] = new Vector3(vertices[i].x, vertices[i].y + Mathf.PerlinNoise(xVertex / 60f, zVertex / 60f) * 15f, vertices[i].z);
    }

    GetTopBotVertex(vertices, ref topVertex, ref botVertex);

    // Lower The Edge Vertices
    vertices = LowerEdges(vertices);

    // Colors
    Color[] colors = new Color[arraySize];
    for (int i = 0, z = 0; z < terrainSize + 1; z++)
    {
        for (int x = 0; x < terrainSize + 1; x++)
        {
            float height = vertices[i].y;
            if(height < botVertex)
            {
                height = botVertex;
            }
            height = Mathf.InverseLerp((float)botVertex, (float)topVertex, height);
            colors[i] = gradient.Evaluate(height);
            i++;
        }
    }

    // Set ObjectGenerator Vertices Before Flat Shading
    objectGenerator.vertices = vertices;

    // Flat Shader Code
    Vector3[] flatShadedVertices = new Vector3[triangles.Length];
    Vector2[] flatShadedUvs = new Vector2[triangles.Length];
    Color[] flatShadedColors = new Color[triangles.Length];
    for (int i = 0; i < triangles.Length; i++)
    {
        flatShadedVertices[i] = vertices[triangles[i]];
        flatShadedUvs[i] = uvs[triangles[i]];
        flatShadedColors[i] = colors[triangles[i]];
        triangles[i] = i;
    }
    vertices = flatShadedVertices;
    uvs = flatShadedUvs;
    colors = flatShadedColors;

    // Set Mesh to newMesh
    newMesh.indexFormat = UnityEngine.Rendering.IndexFormat.UInt32;
    newMesh.vertices = vertices;
    newMesh.triangles = triangles;
    newMesh.colors = colors;
    newMesh.RecalculateNormals();
    GetComponent<MeshFilter>().mesh = newMesh;
    GetComponent<MeshCollider>().sharedMesh = newMesh;

    gameObject.transform.position = new Vector3(terrainSize / 2, 0f, terrainSize / 2);
    water.transform.position = new Vector3(terrainSize / 2, 9f, terrainSize / 2);
    if(terrainSize == 128)
    {
        water.transform.localScale = new Vector3(0.5f, 0.5f, 0.5f);
    }
    simsettings.stage += 1;
}
public void GeneratePlane()
{
    //Init Variables
    ObjectGenerator objectGenerator = FindObjectOfType<ObjectGenerator>();
    SimSettings simsettings = FindObjectOfType<SimSettings>();
    terrainSize = simsettings.terrainSize;
    int arraySize = (terrainSize + 1) * (terrainSize + 1);
    Mesh newMesh = new Mesh();
    Vector3[] vertices = new Vector3[arraySize];
    Vector2[] uvs = new Vector2[arraySize];
    int[] triangles = new int[terrainSize * terrainSize * 2 * 3];
    float topVertex = Mathf.NegativeInfinity;
    float botVertex = Mathf.Infinity;

    // Set Vertex Values
    int vertexPos = 0;
    for (int i = terrainSize / 2; i >= ((terrainSize / 2) *(-1)); i--)
    {
        for (int v = terrainSize/2; v >= ((terrainSize/2)*(-1)); v--)
        {
            vertices[vertexPos] = new Vector3(v, 0, i);
            vertexPos += 1;
        }
    }

    //Set UV values
    for(int i = 0, z = 0; z < terrainSize + 1; z++)
    {
        for(int x = 0; x < terrainSize + 1; x++)
        {
            uvs[i] = new Vector2((float)x / (terrainSize + 1), (float)z / (terrainSize + 1));
            i++;
        }
    }

    //Set Triangle Values
    int triPos = 0;
    for(int i = 0; i < arraySize - (terrainSize + 1); i++)
    {
        if(CheckEnd(i) || i == 0)
        {
            triangles[triPos] = i;
            triPos += 1;
            triangles[triPos] = i + (terrainSize + 1);
            triPos += 1;
            triangles[triPos] = i + (terrainSize + 2);
            triPos += 1;

            triangles[triPos] = i;
            triPos += 1;
            triangles[triPos] = i + (terrainSize + 2);
            triPos += 1;
            triangles[triPos] = i + 1;
            triPos += 1;
        }
        
    }

    // Add Smaller Noise
    int offset = Random.Range(0, 100);
    for (int i = 0; i < vertices.Length; i++)
    {
        float xVertex = vertices[i].x + (terrainSize / 2) + offset;
        float zVertex = vertices[i].z + (terrainSize / 2) + offset;
        vertices[i] = new Vector3(vertices[i].x, Mathf.PerlinNoise(xVertex / 3f, zVertex / 3f), vertices[i].z);
    }

    // Add Larger Noise
    offset = Random.Range(0, 100);
    for (int i = 0; i < vertices.Length; i++)
    {
        float xVertex = vertices[i].x + (terrainSize / 2) + offset;
        float zVertex = vertices[i].z + (terrainSize / 2) + offset;
        vertices[i] = new Vector3(vertices[i].x, vertices[i].y + Mathf.PerlinNoise(xVertex / 15f, zVertex / 15f) * 7f, vertices[i].z);
    }

    // Add Even Larger Noise
    offset = Random.Range(0, 100);
    for (int i = 0; i < vertices.Length; i++)
    {
        float xVertex = vertices[i].x + (terrainSize / 2) + offset;
        float zVertex = vertices[i].z + (terrainSize / 2) + offset;
        vertices[i] = new Vector3(vertices[i].x, vertices[i].y + Mathf.PerlinNoise(xVertex / 60f, zVertex / 60f) * 15f, vertices[i].z);
    }

    GetTopBotVertex(vertices, ref topVertex, ref botVertex);

    // Lower The Edge Vertices
    vertices = LowerEdges(vertices);

    // Colors
    Color[] colors = new Color[arraySize];
    for (int i = 0, z = 0; z < terrainSize + 1; z++)
    {
        for (int x = 0; x < terrainSize + 1; x++)
        {
            float height = vertices[i].y;
            if(height < botVertex)
            {
                height = botVertex;
            }
            height = Mathf.InverseLerp((float)botVertex, (float)topVertex, height);
            colors[i] = gradient.Evaluate(height);
            i++;
        }
    }

    // Set ObjectGenerator Vertices Before Flat Shading
    objectGenerator.vertices = vertices;

    // Flat Shader Code
    Vector3[] flatShadedVertices = new Vector3[triangles.Length];
    Vector2[] flatShadedUvs = new Vector2[triangles.Length];
    Color[] flatShadedColors = new Color[triangles.Length];
    for (int i = 0; i < triangles.Length; i++)
    {
        flatShadedVertices[i] = vertices[triangles[i]];
        flatShadedUvs[i] = uvs[triangles[i]];
        flatShadedColors[i] = colors[triangles[i]];
        triangles[i] = i;
    }
    vertices = flatShadedVertices;
    uvs = flatShadedUvs;
    colors = flatShadedColors;

    // Set Mesh to newMesh
    newMesh.indexFormat = UnityEngine.Rendering.IndexFormat.UInt32;
    newMesh.vertices = vertices;
    newMesh.triangles = triangles;
    newMesh.colors = colors;
    newMesh.RecalculateNormals();
    GetComponent<MeshFilter>().mesh = newMesh;
    GetComponent<MeshCollider>().sharedMesh = newMesh;

    gameObject.transform.position = new Vector3(terrainSize / 2, 0f, terrainSize / 2);
    water.transform.position = new Vector3(terrainSize / 2, 9f, terrainSize / 2);
    if(terrainSize == 128)
    {
        water.transform.localScale = new Vector3(0.5f, 0.5f, 0.5f);
    }
    simsettings.stage += 1;
}
`;
